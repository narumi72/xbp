(function (a) {
    a.fn.particleText = function (p) {
        var k = "";
        if (this[0].className) {
            k = "." + this[0].className
        }
        if (this[0].id) {
            k = "#" + this[0].id
        }
        var f = document.querySelector(k);
        var o = f.getContext("2d");
        var i = f.width = f.clientWidth;
        var c = f.height = f.clientHeight;
        var m = "";
        var l = 0.09;
        if (p.speed) {
            if (p.speed == "middle") {
                l = 0.07
            } else {
                if (p.speed == "slow") {
                    l = 0.04
                } else {
                    if (p.speed == "high") {
                        l = 0.09
                    }
                }
            }
        }
        if (p.text) {
            m = p.text
        } else {
            m = p
        }
        var b = ["#F54064", "#F5D940", "#18EBF2"];
        if (p.colors) {
            b = p.colors
        }
        var e = false;
        if (m.indexOf("<br>") != -1) {
            e = true
        }
        var n = [],
            j = 0;
        function g(r, q) {
            this.x = Math.random() * i;
            this.y = Math.random() * c;
            this.goal = {
                x: r,
                y: q
            };
            this.r = f.clientWidth / 2 * 0.003;//謨ｰ蟄励′螟ｧ縺阪￥縺ｪ繧九→邊貞ｭ舌�繧ｵ繧､繧ｺ縺悟ｰ上＆縺上↑繧�
            this.color = b[Math.floor(Math.random() * b.length)]
        }
        g.prototype.render = function () {
            this.x += (this.goal.x - this.x) * l;
            this.y += (this.goal.y - this.y) * l;
            o.fillStyle = this.color;
            o.beginPath();
            o.arc(this.x, this.y, this.r, Math.PI * 2, false);
            o.fill()
        };
        function h() {
            var x = f.width = f.clientWidth;
            var r = f.height = f.clientHeight;
            o.clearRect(0, 0, f.width, f.height);
            var w = 12;//譁�ｭ励し繧､繧ｺ螟画峩謨ｰ蟄励′蟆上＆縺上↑繧九→譁�ｭ励′螟ｧ縺阪￥縺ｪ繧�
            o.font = "bold " + (
                x / w
            ) + "px 'Teko'";//繝輔か繝ｳ繝医�謖�ｮ�
            o.textAlign = "center";
            if (! e) {
                v()
            } else {
                q()
            }
            function v() {
                var y = 2;
                if (f.height<=300&&f.width> 768) {
                    y = 1.5
                }
                o.fillText(m, x / 2, r / y)
            }
            function q() {
                var D = m;
                var C = "<br>";
                var A = D.split("<br>");
                var y = r / A.length;
                var z = A.length;
                var F = 768;
                if (z == 2) {
                    if (f.width <= F) {
                        var E = 0.6;
                        for (var B = 0; B < A.length; B++) {
                            o.fillText(A[B], x / 2, y * E);
                            E += 0.3
                        }
                    } else {
                        var E = 0.7;
                        for (var B = 0; B < A.length; B++) {
                            o.fillText(A[B], x / 2, y * E);
                            E += 0.5
                        }
                    }
                }
                if (z == 3) {
                    if (f.width <= F) {
                        var E = 0.8;
                        for (var B = 0; B < A.length; B++) {
                            o.fillText(A[B], x / 2, y * E);
                            E += 0.4
                        }
                    } else {
                        var E = 0.9;
                        for (var B = 0; B < A.length; B++) {
                            o.fillText(A[B], x / 2, y * E);
                            E += 0.7
                        }
                    }
                }
                if (z == 4) {
                    if (f.width <= F) {
                        var E = 1;
                        for (var B = 0; B < A.length; B++) {
                            o.fillText(A[B], x / 2, y * E);
                            E += 0.5
                        }
                    } else {
                        var E = 1;
                        for (var B = 0; B < A.length; B++) {
                            o.fillText(A[B], x / 2, y * E);
                            E += 0.8
                        }
                    }
                }
                if (z >= 5) {
                    var E = 1;
                    for (var B = 0; B < A.length; B++) {
                        o.fillText(A[B], x / 2, y * E);
                        E += 0.8
                    }
                }
            }
            var u = o.getImageData(0, 0, x, r).data;
            o.clearRect(0, 0, f.width, f.height);
            o.globalCompositeOperation = "source-over";
            n = [];
            for (var t = 0; t < x; t += Math.round(x / 300)) {//邊貞ｭ舌�謨ｰ
                for (var s = 0; s < r; s += Math.round(x / 300)) {//邊貞ｭ舌�謨ｰ
                    if (u[(
                            (t + s * x) * 4
                        ) + 3] > 150) {
                        n.push(new g(t, s))
                    }
                }
            }
            j = n.length
        }
        function d(q) {
            requestAnimationFrame(d);
            o.clearRect(0, 0, f.width, f.height);
            for (var r = 0; r < j; r++) {
                n[r].render()
            }
        }
        window.addEventListener("resize", h);
        h();
        requestAnimationFrame(d)
    }
})(jQuery);