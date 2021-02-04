import axios from "axios";

var helpers = {
    timeStr(ms) {
        var totalSeconds = ms /1000;
        var minutes = Math.floor(totalSeconds / 60);
        var seconds = (totalSeconds % 60).toFixed(0);
        if (seconds >= 60) {
            minutes++;
            seconds = 0;
        }
        return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    },
    spotify(endpoint, token, callback){
        if (token){
            var elapsed = (new Date().getTime() - token.token_obtained) / 1000;
            if (!isNaN(elapsed)) {
                console.log("Time to refresh token (mm:ss):", this.timeStr((3600 - elapsed) * 1000));
            }
            if (elapsed < 3600) {
                this.access(endpoint, token, data => callback(data));
            } else {
                this.refresh(token, data => callback(data));
            }
        }
    },
    access(endpoint, token, callback){
        if (token){
            axios.get("https://api.spotify.com/v1" + endpoint, {
                headers: {
                    "Authorization": "Bearer " + token.access_token
                }
            })
            .then(response => {
                var data = response.data;
                data.token_expired = false;
                data.token_obtained = new Date().getTime();
                callback(data);
            })
            // .catch(err => {
            //     this.refresh(token, data => callback(data));
            // });
        }
    },
    refresh(token, callback){
        if (token){
            axios.post("/.netlify/functions/refresh_token", JSON.stringify({
                refresh_token: token.refresh_token
            }))
            .then(response => {
                var data = response.data;
                data.token_expired = true;
                data.token_obtained = new Date().getTime();
                data.refresh_token = token.refresh_token;
                callback(data);
            });
        }
    }
}

export default helpers;