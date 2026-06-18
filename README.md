# 🧘 Henry's Taichi Practice Vault

A separate bilingual (EN-VI) Taichi/Qigong resource site for the 50+ body.

**🌐 Live site:** https://henryphamduc.github.io/taichi/

## How to build locally

```bash
cd ~/Taichi-Site
pip install mkdocs-material
mkdocs serve     # http://127.0.0.1:8000
mkdocs build     # static files in ./site/
```

## Deployment

Pushing to the `master` branch of `HenryPhamDuc/taichi` triggers the GitHub Actions workflow in `.github/workflows/deploy.yml`, which builds and deploys to the `gh-pages` branch. GitHub Pages then serves it at `https://henryphamduc.github.io/taichi/`.

## Structure

```
Taichi-Site/
├── docs/
│   ├── index.md              # Curated homepage
│   └── assets/
│       ├── floating-nav.css
│       ├── sidebar-nav.css
│       ├── floating-nav.js
│       ├── sidebar-nav.js
│       └── open-external-links.js
├── mkdocs.yml                # Material theme config
├── .github/workflows/deploy.yml
└── README.md
```

## Author

**Henry Pham Duc** — recreational tennis player in Surrey, BC, framing movement through Taichi principles (Thực-Hư / 虚实).
