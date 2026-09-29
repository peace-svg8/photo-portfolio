const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const files = fs.readdirSync(publicDir).filter(f => /\.(jpg|jpeg|png)$/i.test(f));

async function compress() {
  for (const file of files) {
    const filePath = path.join(publicDir, file);
    const tmpPath = filePath + '.tmp';
    const stats = fs.statSync(filePath);
    const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
    
    console.log(`Processing: ${file} (${sizeMB} MB)`);
    
    try {
      await sharp(filePath)
        .resize({ width: 1920, withoutEnlargement: true })
        .jpeg({ quality: 75, mozjpeg: true })
        .toFile(tmpPath);
      
      fs.unlinkSync(filePath);
      fs.renameSync(tmpPath, filePath);
      
      const newStats = fs.statSync(filePath);
      const newSize = (newStats.size / (1024 * 1024)).toFixed(2);
      console.log(`  -> Compressed to ${newSize} MB`);
    } catch (err) {
      console.log(`  -> Error: ${err.message}`);
      if (fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath);
    }
  }
  console.log('Done!');
}

compress().catch(console.error);
