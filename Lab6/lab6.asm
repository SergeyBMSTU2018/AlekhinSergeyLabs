; ���娭 ��ࣥ� ��� 6

MYCODE segment 'CODE'
    assume cs:MYCODE, ds:data
	
start:
	; ����㧪� ᥣ���⭮�� ॣ���� ������ DS
	mov ax, data
	mov es, ax
	
main:

	; �������⥫쭮� �ॡ������: ���⪠ �࠭�
	call clrscr;
	
	; ��宦����� ������⢠ ����⮢ ��������� ��ப�
	mov si, 80h
	mov cl, [si]
	sub cl, 1
	
	; ���室�� � ��ࢮ�� ������
	add si, 2
	
	; ��宦����� ����� ��ࢮ�� ��ࠬ���
	cycle: 
		
		mov al, [si]
		cmp al, ' '
		je copy
		inc si
		
	loop cycle
	
	copy:
	; ���࠭塞 ����� ��ࢮ�� ��ࠬ���
	mov si, 80h
	mov al, [si]
	sub al, cl
	mov cl, al
	sub cl, 1
		
	push cx
	push cx
	
	mov si, 80h
	mov cl, [si]
	sub cl, 1	
		
	; �����㥬 � ���� ���� ��ࠬ���
	mov si, 80h
	add si, 2
	lea di, buf
	rep movsb
	
	push ES
    pop DS
	
	mov dx, offset firstStr
	call putst
	
	; �ࠢ������ ���� ��ࠬ��� 
	lea di, buf
	lea si, surnameStr
	pop cx
	repe cmpsb
	jne neravn
	je ravn

	
	neravn:
	; �᫨ �� ࠢ��
	mov dx, offset wrongFirstStr
	call putst
	call clrf 
	jmp second
	
	; �᫨ ࠢ��
	ravn:
	mov dx, offset successFirstStr
	call putst
	mov dx, offset surnameStr
	call putst
	call clrf


	second:
	mov si, offset buf
	pop cx
	add si, cx
	add si, 1
	mov al, [si]
	cmp al, '1'
	je er2
	jne ok2
	
	ok2:
	mov dx, offset successSecondStr
	call putst
	call clrf
	jmp exit
	
	er2:
	mov dx, offset wrongSecondStr
	call putst
	call clrf

exit:

	call getch
	
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

	
; ����� ᥣ����
MYCODE ends

data segment
	buf db 20 dup ('1')
	surnameStr db '���娭$'
	firstStr db '���� ��ࠬ��� $'
	successFirstStr db '��७ = $'
	wrongFirstStr db '���ࠢ����$'
	successSecondStr db '��ன ��ࠬ��� ����!$'
	wrongSecondStr db '��ன ��ࠬ��� ����������!$'
data ends

end start
	