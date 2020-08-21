; ���娭 ��ࣥ� ��5-41� ��� 2 ��� 4

MYCODE segment 'CODE'
    assume cs:MYCODE, ds:MYCODE
	
	HEX_STRING DB '0123456789ABCDEF' ; ⠡��� ��४���஢��
	startStr db '������ ᨬ��� ��� ��砫� ࠡ��� �ணࠬ��$'
	continueStr db '��� ��室� �� �ணࠬ�� ������ "q"$'

start:
	; ����㧪� ᥣ���⭮�� ॣ���� ������ DS
    push CS
    pop  DS
	mov bx, offset HEX_STRING
	
main:
	; �������⥫쭮� �ॡ������: ���⪠ �࠭�
	call clrscr;
	
	; �뢮� ��ப�-���᪠��� � ⮬, �� ���� ����� �㪢�
	mov dx, offset startStr
	call putst
	call clrf
	
	; ����� �� ���� ᨬ����
	call getch
	push ax
	
	; ������᪨� �뢮� �㪢 �� �࠭
	mov cx, 10
	cycle:
	
		; �뢮� �㪢�
		pop ax	
		push ax
		mov dl, al
		push ax
		call putch
		
		; ���
		mov dx, 32
		call putch
		mov dx, 205
		call putch
		mov dx, 32
		call putch
		
		; �뢮� hex
		pop ax
		call hex
		pop ax
		
		; Increment �㪢�
		inc al
		push ax
		
	loop cycle
	
	
	; ����� �� �த������� �ணࠬ��
	mov dx, offset continueStr
	call putst
	call clrf
	call getch
	cmp al, 'q'
    je exit 
    jmp main 

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
		mov ah, 08h
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
	mov dx, 'h'
    call putch
	call clrf
    ret
	hex endp
	
; ����� ᥣ����
MYCODE ends
end start
	