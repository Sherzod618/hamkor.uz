from PIL import Image

def analyze_burger():
    img = Image.open('public/images/burger.png')
    img = img.convert("RGBA")
    data = img.getdata()
    width, height = img.size
    
    # Find rows that are completely transparent
    row_alphas = []
    for y in range(height):
        row_opaque = False
        for x in range(width):
            r, g, b, a = data[y * width + x]
            if a > 10:  # Not fully transparent
                row_opaque = True
                break
        row_alphas.append(row_opaque)
    
    # Find bands of opaque pixels
    bands = []
    in_band = False
    start_y = 0
    for y in range(height):
        if row_alphas[y] and not in_band:
            in_band = True
            start_y = y
        elif not row_alphas[y] and in_band:
            in_band = False
            bands.append((start_y, y))
            
    if in_band:
        bands.append((start_y, height))
        
    print(f"Image height: {height}px")
    print(f"Found {len(bands)} distinct layers!")
    
    # Calculate clip paths
    for i, (start, end) in enumerate(bands):
        # Add a tiny bit of padding to not cut edges
        start_pct = max(0, (start - 5) / height * 100)
        end_pct = min(100, (end + 5) / height * 100)
        print(f"Layer {i+1}: Y: {start} to {end} -> clip-path: polygon(0 {start_pct:.2f}%, 100% {start_pct:.2f}%, 100% {end_pct:.2f}%, 0 {end_pct:.2f}%)")

if __name__ == '__main__':
    analyze_burger()
