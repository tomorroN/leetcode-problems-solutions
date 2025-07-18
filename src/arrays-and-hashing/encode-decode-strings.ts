import { expect } from '../utils';

/**
 * LeetCode Problem: Encode and Decode Strings
 * Problem Link: https://leetcode.com/problems/encode-and-decode-strings/
 * Level: Medium
 * Problem Statement:
 * Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.
 *
 * Please implement encode and decode
 *
 * Example 1:
 *
 * Input: ["neet","code","love","you"]
 *
 * Output:["neet","code","love","you"]
 * Example 2:
 *
 * Input: ["we","say",":","yes"]
 *
 * Output: ["we","say",":","yes"]
 *
 * Time Complexity: O(n), where n is the total length of all strings in the input array.
 * Space Complexity: O(n), where n is the total length of all strings in the input array.
 *
 * Hint: Use a delimiter to separate the strings and store their lengths to decode them correctly.
 */
function encode(strs: string[]): string {
  return strs.reduce((acc, str) => acc + `${str.length}#${str}`, '');
}

function decode(str: string): string[] {
  const result: string[] = [];
  let i = 0;

  while (i < str.length) {
    const j = str.indexOf('#', i);
    const length = parseInt(str.slice(i, j), 10);
    result.push(str.slice(j + 1, j + 1 + length));
    i = j + 1 + length;
  }

  return result;
}
// Tests:
const strs1 = ['neet', 'code', 'love', 'you'];
const strs2 = ['we', 'say', ':', 'yes'];
const encoded1 = encode(strs1);
const decoded1 = decode(encoded1);
const encoded2 = encode(strs2);
const decoded2 = decode(encoded2);
expect(encoded1, '4#neet4#code4#love3#you');
expect(decoded1, ['neet', 'code', 'love', 'you']);
expect(encoded2, '2#we3#say1#:3#yes');
expect(decoded2, ['we', 'say', ':', 'yes']);
