import os

def split_chat_log(input_file, output_file1, output_file2):
    # Read all lines from the input file
    with open(input_file, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    # Calculate the midpoint
    mid = len(lines) // 2

    # Write the first half to output_file1
    with open(output_file1, 'w', encoding='utf-8') as f:
        f.writelines(lines[:mid])

    # Write the second half to output_file2
    with open(output_file2, 'w', encoding='utf-8') as f:
        f.writelines(lines[mid:])

    return len(lines[:mid]), len(lines[mid:])

# File names
input_file = 'chat.txt' #Put your .TXT file in here
output_file1 = 'chat_log_part1.txt'
output_file2 = 'chat_log_part2.txt'

# Check if input file exists
if not os.path.exists(input_file):
    print(f"Error: {input_file} not found. Please make sure it exists in the current directory.")
else:
    # Split the file
    count1, count2 = split_chat_log(input_file, output_file1, output_file2)

    # Print results
    print(f"Chat log has been split into two files:")
    print(f"1. {output_file1} contains {count1} messages")
    print(f"2. {output_file2} contains {count2} messages")

    total = count1 + count2
    print(f"Total messages: {total}")

    # Verify
    print("\nVerifying file sizes:")
    print(f"Original file: {os.path.getsize(input_file)} bytes")
    print(f"Part 1 file: {os.path.getsize(output_file1)} bytes")
    print(f"Part 2 file: {os.path.getsize(output_file2)} bytes")
