# Redirect everything to the main site. We use a separate server statement and NOT an if statement - see http://wiki.nginx.org/IfIsEvil

server {
        server_name  _;
        rewrite ^ $scheme://dipietrotoddacademy.com$request_uri redirect;
}

server {
	      listen       80;
	      server_name dipietrotoddacademy.com www.dipietrotoddacademy.com *.dipietrotoddacademy.com;
	      root /usr/share/nginx/wordpress;

	      include global/restrictions.conf;

	      # Additional rules go here.

	      # Only include one of the files below.
	      include global/wordpress.conf;
	      #include global/wordpress-ms-subdir.conf;
	      #include global/wordpress-ms-subdomain.conf;
}
