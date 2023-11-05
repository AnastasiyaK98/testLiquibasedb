--liquibase formatted sql

--changeset your.name:1
-- comment: create person table

create table person (
    id int primary key,
    name varchar(50) not null,
    address1 varchar(50),
    address2 varchar(50),
    city varchar(30)
)
--rollback DROP TABLE person;
--changeset your.name:2
-- comment: insert person table
INSERT INTO person (id, name, address1, address2, city) VALUES (1, 'Sofa', 'Чусовой 4', 'Пермь', 'Киров');
--rollback DELETE FROM person WHERE name='Sofa';

