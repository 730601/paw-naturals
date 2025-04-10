# Images Directory Structure

This directory contains all the images used in the application.

## Directory Structure

```
images/
├── categories/     # Category images
│   ├── food.jpg
│   ├── accessories.jpg
│   ├── health.jpg
│   └── apparel.jpg
└── products/       # Product images
    ├── dog-food/
    │   ├── main.jpg
    │   ├── 1.jpg
    │   ├── 2.jpg
    │   └── 3.jpg
    ├── pet-bed/
    │   ├── main.jpg
    │   ├── 1.jpg
    │   ├── 2.jpg
    │   └── 3.jpg
    └── cat-litter/
        ├── main.jpg
        ├── 1.jpg
        ├── 2.jpg
        └── 3.jpg
```

## Image Requirements

### Category Images
- Format: JPG or PNG
- Size: 800x600 pixels
- Aspect ratio: 4:3
- File naming: Use lowercase with hyphens (e.g., `pet-food.jpg`)

### Product Images
- Format: JPG or PNG
- Size: 1200x900 pixels
- Aspect ratio: 4:3
- File naming: 
  - Main image: `main.jpg`
  - Additional images: `1.jpg`, `2.jpg`, `3.jpg`, etc.

## Adding New Images

1. Place category images directly in the `categories/` directory
2. For product images:
   - Create a new directory with the product name (lowercase, hyphens)
   - Add the main image as `main.jpg`
   - Add additional images as `1.jpg`, `2.jpg`, etc.

## Image Optimization

All images should be:
- Compressed for web use
- Properly sized
- In RGB color mode
- Saved with appropriate quality settings 