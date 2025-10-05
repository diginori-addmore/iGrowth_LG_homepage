#!/usr/bin/env python3
import os
from PIL import Image
import sys

def optimize_image(input_path, output_path):
    """이미지 최적화 함수"""
    try:
        with Image.open(input_path) as img:
            # 원본 크기 확인
            original_size = os.path.getsize(input_path)
            width, height = img.size

            # 파일명으로 최적화 전략 결정
            filename = os.path.basename(input_path).lower()

            # 최대 너비 설정
            if 'background' in filename or 'award_effect' in filename:
                max_width = 1920  # 배경 이미지
                quality = 85
            elif 'pic_' in filename:
                max_width = 1200  # 콘텐츠 이미지
                quality = 85
            elif 'proj_' in filename:
                max_width = 800   # 프로젝트 이미지
                quality = 85
            elif 'feature' in filename:
                max_width = 1000  # 피처 이미지
                quality = 85
            elif 'icon' in filename or 'logo' in filename:
                max_width = 512   # 아이콘
                quality = 90
            elif 'campus' in filename:
                max_width = 1000  # 캠퍼스 이미지
                quality = 85
            else:
                max_width = 1200  # 기본값
                quality = 85

            # 리사이징
            if width > max_width:
                ratio = max_width / width
                new_height = int(height * ratio)
                img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
                print(f"  리사이징: {width}x{height} → {max_width}x{new_height}")

            # RGB로 변환 (PNG의 경우)
            if img.mode in ('RGBA', 'LA', 'P'):
                # 투명도가 있는 경우 WebP로 저장
                if img.mode == 'RGBA' or (img.mode == 'P' and 'transparency' in img.info):
                    output_path = output_path.rsplit('.', 1)[0] + '.webp'
                    img.save(output_path, 'WEBP', quality=quality, method=6)
                else:
                    background = Image.new('RGB', img.size, (255, 255, 255))
                    if img.mode == 'RGBA':
                        background.paste(img, mask=img.split()[3])
                    else:
                        background.paste(img)
                    img = background

                    # WebP로 저장
                    output_path = output_path.rsplit('.', 1)[0] + '.webp'
                    img.save(output_path, 'WEBP', quality=quality, method=6)
            elif input_path.lower().endswith('.svg'):
                # SVG는 복사만
                import shutil
                shutil.copy2(input_path, output_path)
                return
            else:
                # JPG는 WebP로 변환
                output_path = output_path.rsplit('.', 1)[0] + '.webp'
                img.save(output_path, 'WEBP', quality=quality, method=6)

            # 결과 출력
            new_size = os.path.getsize(output_path)
            reduction = ((original_size - new_size) / original_size) * 100
            print(f"  용량: {original_size/1024:.1f}KB → {new_size/1024:.1f}KB ({reduction:.1f}% 감소)")

    except Exception as e:
        print(f"  오류: {str(e)}")

def main():
    public_dir = 'public'

    # open_graph.png 제외 리스트
    exclude_files = ['open_graph.png']

    print("이미지 최적화 시작...\n")

    total_before = 0
    total_after = 0
    count = 0

    for root, dirs, files in os.walk(public_dir):
        for file in files:
            if file.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
                # 제외 파일 체크
                if file in exclude_files:
                    print(f"건너뜀: {file}")
                    continue

                input_path = os.path.join(root, file)
                output_path = input_path

                print(f"\n처리 중: {input_path}")

                original_size = os.path.getsize(input_path)
                total_before += original_size

                optimize_image(input_path, output_path)

                # 확장자가 변경될 수 있으므로 새 파일 찾기
                new_path = output_path.rsplit('.', 1)[0] + '.webp'
                if os.path.exists(new_path):
                    total_after += os.path.getsize(new_path)
                    # 원본 파일 삭제 (webp로 변환된 경우)
                    if new_path != input_path and os.path.exists(input_path):
                        os.remove(input_path)
                        print(f"  원본 삭제: {input_path}")
                elif os.path.exists(output_path):
                    total_after += os.path.getsize(output_path)

                count += 1

    print(f"\n\n=== 최적화 완료 ===")
    print(f"처리된 파일: {count}개")
    print(f"전체 용량: {total_before/1024/1024:.2f}MB → {total_after/1024/1024:.2f}MB")
    print(f"총 감소: {((total_before - total_after) / total_before * 100):.1f}%")

if __name__ == '__main__':
    main()
