import cv2
from pathlib import Path

OUTPUT_DIR = Path("uploads/processed")
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)


def load_image(image_path: str):
    image = cv2.imread(image_path)

    if image is None:
        raise ValueError(f"Unable to load image: {image_path}")

    return image


def resize_image(image):
    return cv2.resize(image, (1280, 720))


def preprocess_image(image_path: str):
    image = load_image(image_path)

    image = resize_image(image)

    output_path = OUTPUT_DIR / Path(image_path).name

    cv2.imwrite(str(output_path), image)

    return str(output_path)