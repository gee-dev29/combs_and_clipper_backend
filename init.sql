-- Initial database setup for Combs and Clippers
-- This file is executed when the PostgreSQL container starts for the first time

-- Create additional databases if needed
-- CREATE DATABASE combs_clippers_test;

-- Create extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create initial tables (you can add more as needed)
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    phone VARCHAR(20),
    role VARCHAR(50) DEFAULT 'customer',
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);

-- Insert sample data (optional)
-- INSERT INTO users (email, password_hash, first_name, last_name, role) 
-- VALUES ('admin@combsclippers.com', '$2b$10$example_hash', 'Admin', 'User', 'admin')
-- ON CONFLICT (email) DO NOTHING;
