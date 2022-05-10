DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`(
                       id INT(11) AUTO_INCREMENT NOT NULl,
                       first_name varchar(32) NOT NULL,
                       last_name varchar(32) NOT NULL,
                       email varchar(64) UNIQUE NOT NULL,
                       phone_number varchar(32) UNIQUE NOT NUll,
                       PRIMARY KEY (id)
);
DROP TABLE IF EXISTS `schedule`;
CREATE TABLE `schedule`(
                       id DATE NOT NULl,
                       note varchar(128) DEFAULT NUll,
                       PRIMARY KEY (id)
);
DROP TABLE IF EXISTS `schedule_user`;
CREATE TABLE `schedule_user`(
                       schedule_id DATE NOT NULl,
                       user_id INT(11) NOT NUll,
                       PRIMARY KEY (schedule_id,user_id),
                       CONSTRAINT FK_USER FOREIGN KEY (user_id) REFERENCES `user` (id),
                        CONSTRAINT FK_SCHEDULE FOREIGN KEY (schedule_id) REFERENCES `schedule` (id)
);
