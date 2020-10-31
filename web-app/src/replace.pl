#!/usr/bin/perl
#
# purpose: this is a perl program that demonstrates
#          how to read file contents from STDIN (perl stdin),
#          use the perl split function to split each line in 
#          the file into a list of words, and then print each word.
#
# attribution: https://alvinalexander.com/blog/post/perl/how-process-every-word-text-file-perl/
# usage:   perl replace.pl < input-file

open(FH, '>', $filename) or die $!;

# read from perl stdin
while (<STDIN>)
{
  # split each input line; words are separated by whitespace
  for $word (split)
  {
    $replaced = 0;
    foreach $argnum (0 .. $#ARGV) {
      if ($word =~ $ARGV[$argnum] && !$replaced) {
        print FH $ARGV[$argnum] . "\n";
        $replaced = 1;
      }
    }
    if (!$replaced) {
      print $word . "\n"; 
    }
  }
}

close(FH);