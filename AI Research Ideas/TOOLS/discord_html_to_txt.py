#This code uses beautiful soup to extract downloaded saved discord chats in .html format
#Extracts Time-Stamp, Discord Username, and Message from HTML to a TXT file. 

import re
from bs4 import BeautifulSoup
import logging

# Set up logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

def extract_chat_logs(html_content):
    soup = BeautifulSoup(html_content, 'html.parser')
    chat_logs = []
    message_count = 0
    
    # Find all message groups
    message_groups = soup.find_all('div', class_='chatlog__message-group')
    logging.info(f"Found {len(message_groups)} message groups")
    
    for message_group in message_groups:
        # Extract author and timestamp for the group
        author_elem = message_group.find('span', class_='chatlog__author-name')
        timestamp_elem = message_group.find('span', class_='chatlog__timestamp')
        
        if author_elem and timestamp_elem:
            author = author_elem.text.strip()
            timestamp = timestamp_elem.text.strip()
            
            # Find all messages in this group
            messages = message_group.find_all('div', class_='chatlog__message')
            
            for message in messages:
                content_elem = message.find('span', class_='markdown')
                if content_elem:
                    content = content_elem.text.strip()
                    chat_logs.append(f"{timestamp} - {author}: {content}")
                    message_count += 1
                else:
                    logging.warning(f"Found a message without content for author {author}")
        else:
            logging.warning("Found a message group without author or timestamp")
    
    logging.info(f"Extracted {message_count} messages in total")
    return chat_logs

# Usage:
input_file_name = 'file.html' #Put in your HTML File 
output_file_name = 'extracted_chat_log.txt'

try:
    with open(input_file_name, 'r', encoding='utf-8') as file:
        html_content = file.read()
    
    extracted_logs = extract_chat_logs(html_content)
    
    with open(output_file_name, 'w', encoding='utf-8') as output_file:
        for log in extracted_logs:
            output_file.write(log + '\n')
    
    logging.info(f"Chat logs have been extracted from {input_file_name} and saved to {output_file_name}")
    print(f"Successfully extracted {len(extracted_logs)} chat messages. Check {output_file_name} for results.")

except FileNotFoundError:
    logging.error(f"Input file {input_file_name} not found. Please check the file name and path.")
except Exception as e:
    logging.error(f"An error occurred: {str(e)}")
