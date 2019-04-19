#!/bin/#!/usr/bin/env bash
docker exec -t portal_db_1 pg_dump --clean --if-exists -U postgres portal > portal.sql
