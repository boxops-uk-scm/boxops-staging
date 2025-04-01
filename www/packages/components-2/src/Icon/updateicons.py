import os
from pathlib import Path

def generate_icon_file(icon_name, directory):
    """
    Generates the new TSX content for an icon component using forwardRef.
    """
    content = f"""import {{ forwardRef }} from 'react';
import Icon, {{ Props }} from '../Icon';
import {{ ReactComponent as Outline }} from './outline.svg?react';
import {{ ReactComponent as Solid }} from './solid.svg?react';

const {icon_name} = forwardRef<SVGSVGElement, Props>((props, ref) => (
  <Icon outline={{Outline}} solid={{Solid}} ref={{ref}} {{...props}} />
));

{icon_name}.displayName = '{icon_name}';

export default {icon_name};
"""
    
    file_path = Path(directory) / f"{icon_name}.tsx"
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(content)
    print(f"Created {file_path}")

def process_directories():
    """
    Processes each icon directory and replaces the TSX file.
    Assumes the script is run from the icon directory.
    """
    root_dir = Path.cwd()
    for dirpath in root_dir.iterdir():
        if dirpath.is_dir():
            icon_name = ''.join(word.capitalize() for word in dirpath.name.split('-'))  # Convert kebab-case to PascalCase
            generate_icon_file(icon_name, dirpath)

if __name__ == "__main__":
    process_directories()