DROP SCHEMA  IF EXISTS `tracker222`;

CREATE SCHEMA `tracker222`;

use `tracker222`;

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`(
                       id INT(11) AUTO_INCREMENT NOT NULl,
                       first_name varchar(32) NOT NULL,
                       last_name varchar(32) NOT NULL,
                       email varchar(64) NOT NULL,
                       phone_number varchar(32) NOT NUll,
                       PRIMARY KEY (id)
);
DROP TABLE IF EXISTS `schedule`;
CREATE TABLE `schedule`(
					id INT(11) AUTO_INCREMENT NOT NULl,
                       `date` varchar(12) UNIQUE NOT NULl,
                       note varchar(128) DEFAULT NUll,
                       PRIMARY KEY (id)
);
DROP TABLE IF EXISTS `time`;
CREATE TABLE `time`(
					id INT(11) AUTO_INCREMENT NOT NULl,
                    time_hour varchar(8) UNIQUE NOT NULL,
                       PRIMARY KEY (id)
);
DROP TABLE IF EXISTS `schedule_user_time`;
CREATE TABLE `schedule_user_time`(
						id INT(11) AUTO_INCREMENT NOT NULl,
                       schedule_id INT(11) NOT NULl,
                       user_id INT(11) NOT NUll,
                       from_id INT(11) NOT NULL,
                       to_id INT(11) NOT NULL,
                       PRIMARY KEY (id,schedule_id,user_id,from_id,to_id),
                       CONSTRAINT FK_FROM FOREIGN KEY (from_id) REFERENCES `time` (id),
                       CONSTRAINT FK_TO FOREIGN KEY (to_id) REFERENCES `time` (id),
                       CONSTRAINT FK_USER FOREIGN KEY (user_id) REFERENCES `user` (id),
                        CONSTRAINT FK_SCHEDULE FOREIGN KEY (schedule_id) REFERENCES `schedule` (id)
);
