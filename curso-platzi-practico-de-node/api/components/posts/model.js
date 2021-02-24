/**
 * A post type
 * @typedef {Object} Post
 * @property {string} id.required - The UUID
 * @property {string} content.required - Text
 * @property {string} user.required - User id
 */

/**
 * Create Post payload
 * @typedef {object} CreatePostPayload
 * @property {string} content.required - Text
 * @property {string} user.required - User id
 */

/**

CREATE TABLE posts (
    id VARCHAR(100) NOT NULL,
    content TEXT NOT NULL,
    user VARCHAR(100) NOT NULL
);



ALTER TABLE posts MODIFY COLUMN `id` VARCHAR(100) NOT NULL;
ALTER TABLE posts MODIFY COLUMN `content` TEXT NOT NULL;
ALTER TABLE posts MODIFY COLUMN `user` VARCHAR(100) NOT NULL;

 */