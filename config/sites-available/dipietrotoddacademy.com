server {
        listen       80;
        server_name  dipietrotoddacademy.com www.dipietrotoddacademy.com *.dipietrotoddacademy.com;
        root /usr/share/nginx/html;
        location ~ ^/(images/|img/|javascript/|js/|css/|343.ttf|stylesheets/|media/|static/|robots.txt|humans.txt) {
          access_log off;
          expires max;
        }
        location ~ \.php$ {
                try_files $uri =404;
                fastcgi_split_path_info ^(.+\.php)(/.+)$;
	        fastcgi_pass unix:/tmp/php5-fpm.sock;
                fastcgi_index index.php;
                include fastcgi_params;
        }
        location / {
              proxy_redirect off;
              proxy_set_header X-Real-IP $remote_addr;
              proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
              proxy_set_header   X-Forwarded-Proto $scheme;
              proxy_set_header Host $http_host;
              proxy_set_header X-NginX-Proxy true;
              proxy_set_header   Connection "";
              proxy_http_version 1.1;
              proxy_pass http://dipietro_node;
        }
}