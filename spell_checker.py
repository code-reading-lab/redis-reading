import os
import langid
import re
from spellchecker import SpellChecker

def check_spelling(text):
    # 判断文本语言，只对英文文本进行拼写检查
    lang, _ = langid.classify(text)
    if lang != 'en':
        return []

    # 去除中文字符
    text = re.sub('[\u4e00-\u9fa5]+', '', text)

    # 使用 spellchecker 进行拼写检查
    spell = SpellChecker(language='en')
    words = text.split()
    misspelled = spell.unknown(words)
    return list(misspelled)

def check_directory(path):
    for root, dirs, files in os.walk(path):
        for file in files:
            if file.endswith('.md'):
                filename = os.path.join(root, file)
                with open(filename, 'r', encoding='utf-8') as f:
                    text = f.read()
                misspelled = check_spelling(text)
                if misspelled:
                    print(f'In file "{filename}": misspelled words: {misspelled}')

# 示例用法
check_directory('./docs/')