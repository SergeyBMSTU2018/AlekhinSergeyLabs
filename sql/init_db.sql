create table if not exists person
(
    id        serial primary key,
    name      varchar(64)  not null,
    surname   varchar(64)  not null,
    email     varchar(64)           default null,
    telephone varchar(12) unique    default null,
    password  text                  default null
);

create table if not exists category
(
    id    serial primary key,
    title varchar(128) unique not null
);

create table if not exists product
(
    id          serial primary key,
    name        varchar(128) not null,
    description text         not null,
    amount      int          not null,
    category_id int          not null,
    owner_id    int          not null,
    close       boolean      not null default false,

    foreign key (owner_id) references person (id) on delete cascade,
    foreign key (category_id) references category (id) on delete cascade
);