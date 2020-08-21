; ���娭 ��ࣥ� ��� 7

MYCODE segment 'CODE'
    assume cs:MYCODE, ds:data
	
start:
	; ����㧪� ᥣ���⭮�� ॣ���� ������ DS
	mov ax, data
	mov ds, ax
	
main:
	; ���⪠ �࠭�
	call clrscr;
	
	; �।������� ����� ᨬ����
	mov dl, offset startStr
	call putst
	call clrf
	
	; ��頥� ���稪 � ॣ���� �㤠 �㤥� ������� ᨬ����
	mov cx, 0 
	mov bx, 0
		
	char_hand:
		; �������� ����� ᨬ����
		call getch_no_echo
		cmp al, '*'
		je exit
		
		; �஢�ઠ �� �ࠢ��쭮��� ��������� ������ � ��ॢ�� � ��設�� ���
		call hex_to_mach
	
	cmp cx, 4
	jne char_hand
	
	; ���࠭塞 �᫮
	push bx
	
	; �����
	mov dl, ' '
	call putch
	mov dl, '='
	call putch
	mov dl, ' '
	call putch
	
	; ���࠭塞 �᫮
	mov dx, bx
	push dx
	
	; �뢮� �� �࠭ ����� 2 ᨬ�����
	mov al, dh
	call hex
	
	; �뢮� �� �࠭ ����� 2 ᨬ�����
	pop dx
	mov al, dl
	call hex
	
	; �뢮� h
	mov dx, 'h'
	call putch
	
	; ���
	mov dl, ' '
	call putch
	mov dl, '-'
	call putch
	mov dl, ' '
	call putch
	
	; �뢮� �����筮�� �� �࠭
	pop bx
	call mach_to_dec
	call clrf
	
	; �������� ����� ᨬ���� 
	call getch_no_echo

jmp main

exit:
	; ���⪠ �࠭�
	call clrscr;
	
	; �뢮� ���ଠ樨 � ᥡ�
	mov dl, offset infStr
	call putst
	call clrf
	
	; �������� ����� ᨬ���� 
	call getch_no_echo
	
	; ���⪠ �࠭�
	call clrscr;
	
	; ��室 �� �ணࠬ��
	mov al, 0
	mov ah, 4ch
	int 021h
	

; ��楤�� - �뢮� ��ப� �� �࠭�
putst proc
	mov ah, 09h
	int 021h
	ret
putst endp
	
; ��楤�� - �뢮� ᨬ����
putch proc
	mov ah, 02h
	int 021h
	ret
putch endp


; ��楤�� - ��ॢ�� ��ப�
clrf proc
	mov dl, 10
	call putch
	mov dl, 13
	call putch
	ret
clrf endp 


; ��楤�� - ���� ᨬ���� � ��
getch_echo proc   
	mov ah, 01h
	int 021h
    ret
getch_echo endp
	
	
; ��楤�� - ���� ᨬ���� ��� ��
getch_no_echo proc   
	mov ah, 08h
	int 021h
    ret
getch_no_echo endp


; ��楤�� - ���⪠ �࠭�
clrscr proc   
	mov ah, 00h 
	mov al, 02
	int 10h
	ret
clrscr endp


; ��楤�� - ��ॢ�� � 16
hex proc
	mov bx, offset hexStr
	
	; ����祭�� ����⪮�
	push ax
	shr al, 4
	xlat 
	
	; �뢮� ����⪮�
	mov dl, al
	call putch
	
	; ����祭�� ������
	pop ax
	and al, 00001111b
	xlat 
	
	; �뢮� ������
	mov dl, al
	call putch
	
	ret
hex endp


; ��楤�� - �� ��ॢ��� � ��設�� ���
hex_to_mach proc
	mov dl, al
	
	; �஢�ઠ �� ���� ����
	check_num:
		; �஢�ઠ �� ����
		cmp al,'0' 
		jb check_big_let    
		cmp al,'9'
		ja check_big_let   
		
		; ����祭�� ����
		sub al,'0' 
		push ax
	jmp correct
	
	; �஢�ઠ �� ���� ����让 �㪢�
	check_big_let: 
		; �஢�ઠ �� ������� �㪢�
		cmp al,'A' 
		jb check_lit_let
		cmp al,'F'
		ja check_lit_let
		
		; ����祭�� �㪢�
		sub al,'A' 
		add al, 10  
		push ax
	jmp correct
	
	; �஢�ઠ �� ���� �����쪮� �㪢�
	check_lit_let:
		; �஢�ઠ �� �������� �㪢�
		cmp al,'a' 
		jb finish
		cmp al,'f'
		ja finish
		
		; ����祭�� �㪢�
		sub al,'a' 
		add al, 10 
		push ax
	jmp correct	
	
	; �᫨ �������� ᨬ��� 㤮���⢮��� �᫮���
	correct: 
		; �뢮� �� �࠭
		call putch 
		
		; ���������� � bx ��襣� ᨬ����
		pop ax 
		mov ah, 0    
		shl bx, 4
		add bx, ax	
	; �����祭�� ���稪�
	inc cx 
	
	; ��室 �� �㭪樨
	finish: 
	ret
hex_to_mach endp

; ��楤�� - �� ��ॢ��� � ������� ���
mach_to_dec proc 
	; ax - �������
	mov ax, bx        	
	mov si, 0
	
	cycle:
		; dx - ���⮪
		mov dx, 0	
		; bx - ����⥫�
		mov bx, mas[si]	;����⥫� 
	
		; ����� ax �� bx, �� �⮬ ax - ��⭮�, dx - ���⮪
		div bx	
		; ���࠭塞 ���⮪
		push dx

		; �뢮� ᨬ���� �� �࠭
		add ax,'0'		
		mov dl,al
		call putch

		; ����砥� ����� �������
		pop ax
		inc si
		inc si
	
		cmp si, 10
	jb cycle	
ret
mach_to_dec	endp

; ����� ᥣ����
MYCODE ends


data segment
	startStr db, '������ �᫮ (HHHH) :$'
	hexStr db '0123456789ABCDEF'
	mas dw 10000, 1000, 100, 10, 1
	infStr db, '���娭 ��ࣥ� ��� 7$'
data ends


end start
	