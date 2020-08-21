; ���娭 ��ࣥ� ��5-41� ��� 2 ��� 4

MYCODE segment 'CODE'
    assume cs:MYCODE, ds:data

start:
	; ����㧪� ᥣ���⭮�� ॣ���� ������ DS
	mov ax, data
	mov ds, ax
	mov bx, offset HEX_STRING
	
	; �������
	buf db 20 dup (' ')
	
	; �������⥫쭮� �ॡ������: ���⪠ �࠭�
	call clrscr;
	
	mov cx, 10
	main:
	
		; �뢮� ��ப�-���᪠��� � ⮬, �� ���� ����� ��ப�
		mov dx, offset startStr
		call putst
		call clrf
		
		lea si, buf
		vvod:
		
		; ������ ᨬ����� � ������
		call getch
		mov [si], al
	
		; �ࠢ����� � $
		cmp al, '$'
		je startvivod
		inc si
		jmp vvod 
		
		startvivod:
		
		; �����
		mov dx, 32
		call putch
		mov dx, 205
		call putch
		mov dx, 32
		call putch
		
		; ���࠭���� cx
		push cx
		
		; �����饭�� ����
		mov cx, si
		lea si, buf
		sub cx, si
		
		vivod:
		
		; ����祭�� ᨬ���� �� ����
		mov al, [si]
		inc si
		
		; �뢮� ᨬ���� �� �࠭
		mov dl, al
		call hex
		
		; �뢮� �஡���
		mov dx, 32
		call putch
	
		loop vivod
	
		; ����⠭������� cx
		pop cx
	
		; ����� �� �த������� �ணࠬ��
		call clrf
		mov dx, offset continueStr
		call putst
		call getch
		cmp al, 'q'
		je exit 
		call clrf
		
	loop main
	
exit:
	; �������⥫쭮� �ॡ������: ���⪠ �࠭�
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

	; ��楤�� - ���� ᨬ����
	getch proc   
		mov ah, 01h
		int 021h
        ret
	getch endp

	; ��楤�� - ���⪠ �࠭�
	clrscr proc   
		mov ah, 00h 
		mov al, 02
		int 10h
		ret
	clrscr endp
	
	; ��ॢ�� � 16
	hex proc
	push ax
	shr al, 4
	xlat 
	mov dl, al
	call putch
	pop ax
	and al, 00001111b
	xlat 
	mov dl, al
	call putch
	mov dx, 104
    call putch
    ret
	hex endp
	
; ����� ᥣ����
MYCODE ends

data segment
HEX_STRING db '0123456789ABCDEF' ; ⠡��� ��४���஢��
startStr db '������ ��ப� ��� ��ॢ���$'
continueStr db '��� ��室� �� �ணࠬ�� ������ "q": $'
data ends
	
end start

	