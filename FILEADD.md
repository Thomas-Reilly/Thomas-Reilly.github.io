Here is the process to add a file to github:

Last login: Thu Aug 23 09:03:02 on console
CompClass-20:~ 2020643$ cd desktop
CompClass-20:desktop 2020643$ ls
Atom.app	HTMLText	Thomas Reilly
CompClass-20:desktop 2020643$ git config --global user.name "Thomas Reilly"
CompClass-20:desktop 2020643$ git config --global user.email 2020643@sluh.org
CompClass-20:desktop 2020643$ cd Thomas-Reilly.github.io
CompClass-20:Thomas-Reilly.github.io 2020643$ pico
CompClass-20:Thomas-Reilly.github.io 2020643$ ls
README.md
CompClass-20:Thomas-Reilly.github.io 2020643$ git init
Initialized empty Git repository in /Users/2020643/Desktop/Thomas-Reilly.github.io/.git/
CompClass-20:Thomas-Reilly.github.io 2020643$ git add README.md
CompClass-20:Thomas-Reilly.github.io 2020643$ git commit -m "I am uploading the ReadMe file. what's ligma?"
[master (root-commit) 9df7a0d] I am uploading the ReadMe file. what's ligma?
 1 file changed, 1 insertion(+)
 create mode 100644 README.md
CompClass-20:Thomas-Reilly.github.io 2020643$ git remote add connection1 https://github.com/Thomas-Reilly/Thomas-Reilly.github.io
CompClass-20:Thomas-Reilly.github.io 2020643$ git push connection1 master
Username for 'https://github.com': Thomas-Reilly
Password for 'https://Thomas-Reilly@github.com': 
Counting objects: 3, done.
Writing objects: 100% (3/3), 270 bytes | 270.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To https://github.com/Thomas-Reilly/Thomas-Reilly.github.io
 * [new branch]      master -> master
CompClass-20:Thomas-Reilly.github.io 2020643$ 
