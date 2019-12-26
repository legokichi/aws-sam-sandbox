FROM ubuntu:18.04
WORKDIR /work

RUN apt-get -y update\
 && apt-get -y install --no-install-recommends\
    ca-certificates python3-pip\
 && apt-get clean && rm -rf /var/lib/apt/lists/*\
 && pip3 install setuptools \
 && pip3 install awscli
