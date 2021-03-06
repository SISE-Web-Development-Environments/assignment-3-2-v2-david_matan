-- Create a new table called 'profile' in schema 'Profiles'
-- Drop the table if it already exists

DROP TABLE IF EXISTS Profile.profile
GO
-- Create the table in the specified schema
CREATE TABLE profile
(
    username [VARCHAR](10) NOT NULL PRIMARY KEY, -- primary key column
    watchedRecipe [VARCHAR](4000) ,
    favoriteRecipe [VARCHAR](4000),
    lastWatched [VARCHAR](4000)
    -- specify more columns here
);
GO