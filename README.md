# Nodyn Example Applications

Shows usage of nodyn with common npm modules. To run the examples, put the
`nodyn` binary somewhere within your path. If you don't already have Nodyn
installed, download the latest snapshot release from 
[sonatype](https://oss.sonatype.org/content/repositories/snapshots/io/nodyn/nodyn/0.1.1-SNAPSHOT/). The current snapshot version is 0.1.1. Grab the most
recent binary, unzip it and add it to your path. On a unix-y OS this might
look something like this.

    $ wget https://oss.sonatype.org/content/repositories/snapshots/io/nodyn/nodyn/0.1.1-SNAPSHOT/nodyn-0.1.1-20140922.165638-176-bin.zip
    --2014-09-23 14:39:53--  https://oss.sonatype.org/content/repositories/snapshots/io/nodyn/nodyn/0.1.1-SNAPSHOT/nodyn-0.1.1-20140922.165638-176-bin.zip
    Resolving oss.sonatype.org... 207.223.241.93
    Connecting to oss.sonatype.org|207.223.241.93|:443... connected.
    HTTP request sent, awaiting response... 200 OK
    Length: 13706985 (13M) [application/zip]
    Saving to: ‘nodyn-0.1.1-20140922.165638-176-bin.zip’

    100%[=========================================>] 13,706,985  2.85MB/s   in 5.3s   j

    2014-09-23 14:39:59 (2.46 MB/s) - ‘nodyn-0.1.1-20140922.165638-176-bin.zip’ saved [13706985/13706985]

    $ unzip nodyn-0.1.1-20140922.165638-176-bin.zip        ◼
    Archive:  nodyn-0.1.1-20140922.165638-176-bin.zip
      inflating: nodyn
    $ export PATH="`pwd`:$PATH"

To run the examples, change into the directory you'd like to run. Usually
the main example will be contained in `app.js`. First, there will usually
be a package.json. You'll need to install these dependencies using NPM.

    $ npm install

Then run the app.

    $ nodyn app.js

Please report any bugs or issues found. Contributions welcome!
