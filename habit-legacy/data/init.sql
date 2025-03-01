-- Enable the pgcrypto extension for password encryption
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Drop existing tables if they exist
DROP TABLE IF EXISTS Habits CASCADE;
DROP TABLE IF EXISTS Users CASCADE;
DROP TABLE IF EXISTS Level CASCADE;

-- Create the Level table with auto-incrementing levelID and levelXPRequiredForUpgrade
CREATE TABLE Level (
    levelID SERIAL PRIMARY KEY,  -- Auto-incrementing levelID
    levelXPRequiredForUpgrade INT NOT NULL -- XP required to upgrade to the next level
);

-- Create the Users table with an auto-incrementing user_id and a foreign key to Level
CREATE TABLE Users (
    user_id SERIAL PRIMARY KEY,        -- Auto-incrementing user_id as the primary key
    email TEXT UNIQUE NOT NULL,         -- Email is unique but no longer the primary key
    password TEXT NOT NULL, 
    levelId INT REFERENCES Level(levelID), -- Foreign key reference to Level table
    currentLevelXP INT
);

-- Create the Habits table with a foreign key reference to Users
CREATE TABLE Habits (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES Users(user_id) ON DELETE CASCADE, -- Foreign key reference to Users table
    name TEXT NOT NULL,
    description TEXT,
    frequency TEXT NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    streak INT DEFAULT 0
);

-- Insert 100 levels with increasing XP requirements
DO $$ 
BEGIN
    FOR i IN 1..100 LOOP
        INSERT INTO Level (levelXPRequiredForUpgrade)
        VALUES (i * i * 10);  -- Quadratic increase in XP requirement (level^2 * 10)
    END LOOP;
END $$;

-- Insert a user with an encrypted password
INSERT INTO Users (email, password, levelId) 
VALUES (
    'user@example.com', 
    crypt('password', gen_salt('bf')), 
    1  -- Assuming the user starts at level 1
);
