#!/usr/bin/env python3
import random
import time
from http.server import HTTPServer, SimpleHTTPRequestHandler

class DelayedHTTPRequestHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        time.sleep(random.uniform(1, 2))  # Simulate 2 seconds of latency
        super().do_GET()

if __name__ == '__main__':
    port = 8123
    server_address = ('', port)
    httpd = HTTPServer(server_address, DelayedHTTPRequestHandler)
    httpd.serve_forever()
