var SIM = {
    current_id: 0,
    objects: [],
    scene: null,
    start: function(scene) {
        this.scene = scene;
    },
    remove: function(id, callback) {
        this.objects.splice(id, 1);
        if(typeof(callback) != 'undefined') callback();
    },
    add: function(obj, callback) {
        for(var i = 0; i < this.current_id; i++) {
            this.objects[i].speed.push([0, 0, 0]);
        }
        for(var i = 0; i < this.current_id; i++) {
            obj.speed.push([0, 0, 0]);
        }

        obj.id = this.current_id;
        obj.prev = obj.coord;
        obj.geometry = new THREE.SphereGeometry(obj.radius, 30, 30);
        obj.material = new THREE.MeshBasicMaterial({color: obj.color});
        obj.mesh = new THREE.Mesh(obj.geometry, obj.material);
        this.scene.add(obj.mesh);
        this.objects.push(obj);
        this.current_id++;
        if(typeof(callback) != 'undefined') callback();
    },
    pop: function() {
        for(var id = 0; id < this.current_id; id++) {
            for(var i = 0; i < this.current_id; i++) {
                if(id == i) continue;

                var center_dist;
                var zeta_deg = 0, yeta_deg = 0, temp_gravity_module = 0;
                var temp_gravity = [];
                var temp_coord = [];

                temp_coord[0] = this.objects[id].coord[0] - this.objects[i].prev[0];
                temp_coord[1] = this.objects[id].coord[1] - this.objects[i].prev[1];
                temp_coord[2] = this.objects[id].coord[2] - this.objects[i].prev[2];

                this.objects[id].prev[0] = this.objects[id].coord[0];
                this.objects[id].prev[1] = this.objects[id].coord[1];
                this.objects[id].prev[2] = this.objects[id].coord[2];

                center_dist = Math.sqrt((temp_coord[0]*temp_coord[0])+(temp_coord[1]*temp_coord[1])+(temp_coord[2]*temp_coord[2]));

                temp_gravity_module = ((6.67384 * Math.pow(10,-11)) * this.objects[i].mass)/(center_dist*center_dist);

                yeta_deg = Math.atan(temp_coord[1] / temp_coord[0]);
                zeta_deg = temp_coord[2] / Math.sqrt((temp_coord[0]*temp_coord[0])+(temp_coord[1]*temp_coord[1])+(temp_coord[2]*temp_coord[2]));
                if(temp_coord[0] >= 0 & temp_coord[2] >= 0) zeta_deg = Math.acos(zeta_deg);
                if(temp_coord[0] >= 0 & temp_coord[2] < 0) zeta_deg = Math.acos(zeta_deg);
                if(temp_coord[0] < 0 & temp_coord[2] < 0) zeta_deg = -Math.acos(zeta_deg);
                if(temp_coord[0] < 0 & temp_coord[2] >= 0) zeta_deg = -Math.acos(zeta_deg);

                temp_gravity[0] = (temp_gravity_module * Math.sin(zeta_deg)) * Math.cos(yeta_deg);
                temp_gravity[1] = (temp_gravity_module * Math.sin(zeta_deg)) * Math.sin(yeta_deg);
                temp_gravity[2] = temp_gravity_module * Math.cos(zeta_deg);

                this.objects[id].speed[i][0] -= temp_gravity[0];
                this.objects[id].speed[i][1] -= temp_gravity[1];
                this.objects[id].speed[i][2] -= temp_gravity[2];

                this.objects[id].coord[0] += this.objects[id].speed[i][0];
                this.objects[id].coord[1] += this.objects[id].speed[i][1];
                this.objects[id].coord[2] += this.objects[id].speed[i][2];

            }
            this.objects[id].mesh.position.set(
                this.objects[id].coord[1],
                this.objects[id].coord[2],
                this.objects[id].coord[0]
            );
        }
    }
};
