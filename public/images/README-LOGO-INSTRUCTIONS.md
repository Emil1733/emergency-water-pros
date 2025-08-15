# 🎨 Logo Upload Instructions for Emergency Water Pros

## 📁 Folder Structure Created
```
/public/images/
├── logo-mobile.svg          ← UPLOAD YOUR MOBILE LOGO HERE
├── logo-desktop.svg         ← UPLOAD YOUR DESKTOP LOGO HERE  
└── logo-dark.svg            ← UPLOAD DARK VERSION HERE (optional)
```

## 🎯 Logo Specifications

### 📱 **MOBILE LOGO** (`logo-mobile.svg`)
**Use Case:** Mobile devices (≤768px width)
**Location:** Emergency banner on small screens

**Requirements:**
- **Dimensions:** 30px height × 80-100px width
- **Text Content:** "EWP" or water drop icon + "EWP"
- **Colors:** 
  - Text: White (#ffffff)
  - Icon: White (#ffffff) or Light Blue (#007fff)
- **Background:** Transparent (will be on red emergency banner)
- **Format:** SVG preferred (PNG acceptable)

**Visual Style:**
```
💧 EWP
```
OR
```
EWP
```

### 🖥️ **DESKTOP LOGO** (`logo-desktop.svg`)
**Use Case:** Desktop/tablet devices (>768px width)
**Location:** Emergency banner on larger screens

**Requirements:**
- **Dimensions:** 40px height × 180-220px width
- **Text Content:** "Emergency Water Pros" (full name)
- **Colors:**
  - Text: White (#ffffff) 
  - Icon: White (#ffffff) or Light Blue (#007fff)
- **Background:** Transparent (will be on red emergency banner)
- **Format:** SVG preferred (PNG acceptable)

**Visual Style:**
```
💧 Emergency Water Pros
```
OR
```
Emergency Water Pros
```

### 🌞 **DARK LOGO** (`logo-dark.svg`) - OPTIONAL
**Use Case:** Light backgrounds (future use)
**Location:** Footer, light sections

**Requirements:**
- **Same dimensions as desktop logo**
- **Colors:**
  - Text: Dark Blue (#1159a0) 
  - Icon: Dark Blue (#1159a0) or Orange (#f97a1f)
- **Background:** Transparent
- **Format:** SVG preferred

## 🎨 **Brand Colors Reference**

Use these exact colors from your design system:
- **Primary Blue:** `#1159a0`
- **Secondary Blue:** `#007fff` 
- **Orange Accent:** `#f97a1f`
- **White:** `#ffffff`
- **Emergency Red:** `#ef4444` (background - don't use in logo)

## 📋 **Upload Checklist**

### ✅ **Before Creating Logos:**
- [ ] Check mobile emergency banner height (56px total)
- [ ] Keep logo under 30px height for mobile
- [ ] Use white colors for red background visibility
- [ ] Make background transparent

### ✅ **File Upload Steps:**
1. Create your logo files (SVG recommended)
2. Name them exactly:
   - `logo-mobile.svg`
   - `logo-desktop.svg` 
   - `logo-dark.svg` (optional)
3. Upload to `/public/images/` folder
4. Test on both mobile and desktop

### ✅ **After Upload:**
- [ ] Mobile logo visible on small screens
- [ ] Desktop logo visible on large screens
- [ ] White text readable on red emergency banner
- [ ] Logo doesn't break emergency banner layout

## 🔧 **Integration Process**

Once you upload the logo files:
1. I'll integrate them into the EmergencyBanner component
2. Add responsive display logic (mobile vs desktop)
3. Update structured data references
4. Test across all screen sizes
5. Deploy the changes

## 💡 **Logo Design Tips**

### **Mobile Logo (EWP):**
- Keep it **simple** - screen space is limited
- **Bold, readable font** - easy to read on small screens
- **Water drop icon** adds instant recognition
- **High contrast** against red background

### **Desktop Logo (Full Name):**
- **Professional appearance** for larger screens
- **Full company name** builds trust
- **Consistent with mobile** but more detailed
- **Balanced proportions** in emergency banner

## 🚀 **Ready to Upload?**

1. **Create your 2-3 logo files** following the specs above
2. **Save them** as `logo-mobile.svg`, `logo-desktop.svg`, `logo-dark.svg`
3. **Upload to** `/public/images/` folder
4. **Let me know** when ready - I'll integrate them immediately!

## 📞 **Questions?**
If you need any clarification on dimensions, colors, or placement, just ask!