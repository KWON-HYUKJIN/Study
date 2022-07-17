# CentOS7

CentOS7 7.9.2009

[Download](https://www.centos.org/download/)


Check IP 

- https://berryservice.net/ipaddress

- https://search.naver.com/search.naver?&query=%EB%82%B4%EC%95%84%EC%9D%B4%ED%94%BC

### 
``` bash
whoami 
passwd
pwd
hostname 
ifconfig // /sbin/ifconfig 
```

### yum
``` bash
yum update // long time 
```

### Firewall 
``` bash
firewall-cmd --permanent --add-service=ssh
firewall-cmd --permanent --add-service=http
firewall-cmd --permanent --add-service=https
firewall-cmd --permanent --add-service=mysql
firewall-cmd --reload
```

### Programs
``` bash
nginx 
https://www.nginx.com/resources/wiki/start/topics/tutorials/install/

vi /etc/yum.repos.d/nginx.repo

[nginx]
name=nginx repo
baseurl=https://nginx.org/packages/centos/$releasever/$basearch/
gpgcheck=0
enabled=1

yum install nginx -y

nginx
nginx -s stop

systemctl start nginx
systemctl enable nginx
systemctl stop nginx

Volta
curl https://get.volta.sh | bash
volta install node@16
ls -algs 
. .bash_profile // source .bash_profile


MySQL
// install 
vi /etc/my.cnf
grep 'temporary password' /var/log/mysqld.log
/usr/bin/mysql_secure_installation 
mysql -u root -p


kill -9 ${ID}
kill ${ID}

```


