let vue = new Vue({
    el: "#user_login",
    data: {
        login_form: {
            username: "",
            keyword: ""
        },
        rules: {
            username: [
                {required: true, message: '请输入用户名', trigger: 'change'},
            ],
            keyword: [
                {required: true, message: '请输入密码', trigger: 'change'},
            ],
        }
    },
    methods: {
        onSubmit: function (form) {
            this.$refs[form].validate((valid) => {
                if (valid) {
                    let crped_username = Base64.encode(this.login_form.username);
                    alert(crped_username);
                } else {
                    return false;
                }
            });
        },

    }
});