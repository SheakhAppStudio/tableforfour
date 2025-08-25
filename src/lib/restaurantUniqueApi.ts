import crypto from 'crypto';
import { ObjectId } from 'mongodb';

const algorithm = 'aes-256-cbc';

// Get from environment variables (or generate once and store)
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || 'default-key-must-be-32-bytes-long!'; // Fallback for demo only
const ENCRYPTION_IV = process.env.ENCRYPTION_IV || '16-byte-iv-here!'; // Fallback for demo only

// Validate and prepare key/IV
const key = Buffer.from(ENCRYPTION_KEY.slice(0, 32), 'utf-8'); // Ensure 32 bytes
const iv = Buffer.from(ENCRYPTION_IV.slice(0, 16), 'utf-8'); // Ensure 16 bytes

export function encryptRestaurantObjectId(id: ObjectId): string {
  try {
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(id.toHexString(), 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
  } catch (error) {
    console.error('Encryption failed:', error);
    throw new Error('Failed to encrypt ID');
  }
}

export function decryptRestaurantObjectId(encrypted: string): string {
  try {
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  } catch (error) {
    console.error('Decryption failed:', error);
    throw new Error('Failed to decrypt ID');
  }
}