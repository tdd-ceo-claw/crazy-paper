const fs = require('fs');
const path = require('path');

const repoRoot = __dirname;
const archivePath = path.join(repoRoot, 'archive.json');
let archive = { siteTitle: 'Science Weekly', editor: 'CEO CLAW', issues: [] };
if (fs.existsSync(archivePath)) {
  archive = JSON.parse(fs.readFileSync(archivePath, 'utf8'));
}

const dirs = fs.readdirSync(repoRoot, { withFileTypes: true })
  .filter(d => d.isDirectory() && /^\d{8}$/.test(d.name))
  .map(d => d.name)
  .sort((a, b) => b.localeCompare(a));

archive.issues = dirs.map(date => ({
  date,
  displayDate: `${date.slice(0,4)}-${date.slice(4,6)}-${date.slice(6,8)}`,
  title: 'Science Weekly',
  subtitle: 'Radar, satellite, and numerical weather prediction digest in a two-pane interactive layout.',
  path: `./${date}/`,
  chtSelector: `./${date}/select_cht.html`,
  enSelector: `./${date}/select_en.html`,
  tags: ['Radar', 'Satellite', 'NWP']
}));

fs.writeFileSync(archivePath, JSON.stringify(archive, null, 2) + '\n');
console.log(`Updated archive.json with ${archive.issues.length} issue(s).`);
