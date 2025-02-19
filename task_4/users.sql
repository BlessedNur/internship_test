CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (name, email, password, created_at) VALUES
  ('John Doe', 'john@example.com', 'password_1', '2024-01-15 10:00:00'),
  ('Jane Smith', 'jane@example.com', 'password_2', '2024-02-01 15:30:00'),
  ('Bob Wilson', 'bob@example.com', 'password_3', '2023-12-25 09:15:00'),
  ('Alice Brown', 'alice@example.com', 'password_4', '2024-02-10 14:20:00'),
  ('Charlie Davi', 'charlie@example.com', 'password_5', '2024-01-30 11:45:00');

SELECT * FROM users 
WHERE created_at > '2024-01-01 00:00:00'
ORDER BY created_at;