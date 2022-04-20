#include <stdio.h>
#include <cstring>

#include "util.h"
#include "main.h"



int uncode_file(const char *filename){
	char *lang;
	lang = detect_file_lang(filename);
	printf("%s",lang);
	return 0;
}
int uncode_directory(const char *path){
	char *lang;
	lang = detect_path_lang(path);
	printf("%s",lang);
	return 0;
}


int main(int argc, char const *argv[])
{
	int type;
	char *path;
	if (argc<3){
		fprintf(stderr,"Usage:./pyuml [-f|-d|-c] <path|code>\n");
		return 1;
	}
	// switch for the first argument
	if (strcmp(argv[1], "-f")==0){
		type = 0; // File
	}else if (strcmp(argv[1], "-d")==0){
		type = 1; // Directory
	}else if (strcmp(argv[1], "-c")==0){
		type = 2;  // Code (Later)
	}
	path =(char *) argv[2];
	switch(type){
		case 0:
				return uncode_file(path);
		case 1:
				return uncode_directory(path);
		default:
			fprintf(stderr,"Unknown Option !	\n");
			return 1;
	}
	return 0;
}