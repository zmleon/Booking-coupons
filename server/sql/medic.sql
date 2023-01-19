CREATE TABLE IF NOT EXISTS users(
	id bigint,
	last_name VARCHAR(30) NOT NULL,
	first_name VARCHAR(30) NOT NULL,
	patronymic VARCHAR(30) NOT NULL,
	photo VARCHAR(255),
	birth_date DATE NOT NULL, 
	phone_number VARCHAR(12),
	role VARCHAR(20),
	PRIMARY KEY(id),
	UNIQUE(user_id),
	UNIQUE(phone_number),
);

CREATE TABLE IF NOT EXISTS hospitals(
id bigint,
name varchar(255) NOT NULL,
city VARCHAR(30) NOT NULL,
address varchar(255),
phone_number VARCHAR(12) NOT NULL,
email VARCHAR(60) NOT NULL, 
PRIMARY KEY(id),
UNIQUE(phone_number),
UNIQUE(email)
);

CREATE TABLE doctors(
id bigint,
last_name varchar(255),
first_name varchar(255),
hospital_id int NOT NULL,
phone_number varchar(12),
photo varchar(255),
position varchar(100),
PRIMARY KEY(id),
UNIQUE(id, hospital_id, phone_number),	
FOREIGN KEY (hospital_id) REFERENCES hospitals(id),
);

CREATE TABLE talons(
id bigint,
name varchar(255) NOT NULL,
user_id int NOT NULL,
hospital_id int NOT NULL,
doctor_id int NOT NULL,
description VARCHAR(255) NOT NULL,
PRIMARY KEY(id),
UNIQUE(id, hospital_id, doctor_id),
FOREIGN KEY (user_id) REFERENCES users (id) ,
FOREIGN KEY (hospital_id) REFERENCES hospitals (id),
FOREIGN KEY (doctor_id) REFERENCES doctors (id) 
);

CREATE TABLE booked_talons(
id bigint,
name varchar(255) NOT NULL,
user_id int NOT NULL,
hospital_id int NOT NULL,
doctor_id int NOT NULL,
talon_id int NOT NULL,
description VARCHAR(255) NOT NULL,
date DATE NOT NULL, 
PRIMARY KEY(id),
UNIQUE(id, hospital_id, doctor_id,talon_id),
FOREIGN KEY (user_id) REFERENCES users (id),
FOREIGN KEY (doctor_id) REFERENCES doctors (id),
FOREIGN KEY (talon_id) REFERENCES talons (id),
FOREIGN KEY (hospital_id) REFERENCES hospitals (id)
);

CREATE TABLE feedbacks(
id bigint,
title varchar(255) NOT NULL,
user_id int NOT NULL,
description VARCHAR(255) NOT NULL,
PRIMARY KEY(id),
UNIQUE(id),
FOREIGN KEY (user_id) REFERENCES users (id)
);