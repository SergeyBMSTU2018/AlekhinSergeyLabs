CMAKE_MINIMUM_REQUIRED(VERSION 3.13.4)
PROJECT(DZ2)

SET(CMAKE_CXX_STANDARD 14)
#SET(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -Wall -Wextra -Werror -Wpedantic")

INCLUDE_DIRECTORIES(project/include)

ADD_EXECUTABLE(${PROJECT_NAME}
        project/src/main.cpp
        project/src/Table.cpp
        project/src/Utils.cpp
        project/src/Func.cpp)
