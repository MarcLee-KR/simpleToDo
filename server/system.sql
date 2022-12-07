create table todo (
    id int auto_increment not null primary key,
    title varchar(100) not null,
    description text not null,
    status tinyint(1) not null default 0,
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp on update current_timestamp
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

insert into todo (title, description, status) values ('title1', 'description1', 1);
insert into todo (title, description, status) values ('title2', 'description2', 0);
insert into todo (title, description, status) values ('title3', 'description3', 1);
insert into todo (title, description, status) values ('title4', 'description4', 0);
insert into todo (title, description, status) values ('title5', 'description5', 1);
