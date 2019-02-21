# poc-highchart

##Creating Database

CREATE DATABASE IPLPoll;


##Creating Table
We will store the team data in IplTeams table. Execute the following commands to create the table.

CREATE TABLE IplTeams    
(  
TeamId INTEGER IDENTITY(1,1) PRIMARY KEY,  
TeamName VARCHAR(30) NOT NULL,  
VoteCount INTEGER NOT NULL  
) 

##Insert Teams
Now, we will put in the team names and initialize the vote count to zero. Execute the following insert statements.

INSERT INTO IplTeams VALUES ('Chennai Super Kings',0)  
INSERT INTO IplTeams VALUES ('Delhi Daredevils',0)  
INSERT INTO IplTeams VALUES ('Kings XI Punjab',0)  
INSERT INTO IplTeams VALUES ('Kolkata Knight Riders',0)  
INSERT INTO IplTeams VALUES ('Mumbai Indians',0)  
INSERT INTO IplTeams VALUES ('Rajasthan Royals',0)  
INSERT INTO IplTeams VALUES ('Royal Challengers Bangalore',0)  
INSERT INTO IplTeams VALUES ('Sunrisers Hyderabad',0) 
