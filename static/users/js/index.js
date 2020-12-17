let app = new Vue({
    el: "#app",
    data: {
        default_active: "1",
        login_user: {
            name: "钟源",
            id: ""
        }
    },
    methods: {
        hideAll() {
            document.getElementById('address_manage').style.display = 'none';
            document.getElementById('all_order').style.display = 'none';
            document.getElementById('tobe_received').style.display = 'none';
            document.getElementById('map_orders').style.display = 'none';
        },
        handle_select(key, keyPath) {
            this.hideAll();
            switch (key) {
                case("1"):
                    document.getElementById('address_manage').style.display = 'block';
                    break;
                case("2-1"):
                    document.getElementById('all_order').style.display = 'block';
                    break;
                case("2-2"):
                    document.getElementById('tobe_received').style.display = 'block';
                    break;
                case("2-3"):
                    document.getElementById('map_orders').style.display = 'block';
                    break;
                default:
                    document.getElementById('address_manage').style.display = 'block';
                    break;
            }
        },
        handle_command(command) {
            console.log(command);
            switch (command) {
                case("1"):
                    break;
                case("2"):
                    self.location="/users/login";
                    break;
                default:
                    break;
            }
        }
    }
});

app.handle_select(app.default_active, "");