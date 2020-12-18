Vue.use(VueBaiduMap.default, {
    ak: 'MTMdfHzZv4SVWqauWpmqOwKjUEysvKpd'
});

let app = new Vue({
    el: "#app",
    data: {
        default_active: "1",
        login_user: {
            name: "钟源",
            id: ""
        },
        address: {
            all: [],
            current: {},
            temporal_coor: {},  // 选择的经纬度暂存于此
            search_keyword: '',
            map: 0,
            edit_mode: false,
            mapInfo: {
                center: {lng: 114.372042, lat: 30.544861},
                zoom: 16
            },
            addVisible: false,
            mapVisible: false,
            rules: {
                province: [
                    {required: true, message: '请输入省份', trigger: 'change'},
                ],
                city: [
                    {required: true, message: '请输入市区', trigger: 'change'},
                ],
                addressDetail: [
                    {required: true, message: '请输入详细地址', trigger: 'change'},
                ],
                phoneNum: [
                    {required: true, message: '请输入联系方式', trigger: 'change'},
                ],
            }
        },

        all_orders: [],
        tobereceived_orders: [],


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
        // 用户旁设置键对应方法
        handle_command(command) {
            console.log(command);
            switch (command) {
                case("1"):
                    break;
                case("2"):
                    self.location = "/users/login";
                    break;
                default:
                    break;
            }
        },
        address_showMap() {
            this.address.mapVisible = true;
        },
        // 地图初始化时调用
        address_mapHandler({BMap, map}) {
            this.address.map = map;   //将map变量存储在全局
        },
        // 地图坐标选取
        address_pointPick(e) {
            this.address.map.clearOverlays();
            var myMarker = new BMap.Marker(new BMap.Point(e.point.lng, e.point.lat));
            this.address.map.addOverlay(myMarker);
            this.address.temporal_coor = {addressLon: e.point.lng, addressLat: e.point.lat};
        },
        addAddress() {
            this.address.current = {id: this.address.all.length + 1};
            this.address.edit_mode = false;
            this.address.addVisible = true;
        },
        queryAddress() {

        }
    }
});

app.handle_select(app.default_active, "");

