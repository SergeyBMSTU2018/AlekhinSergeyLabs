; Алехин Сергей Лаб 7

MYCODE segment 'CODE'
    assume cs:MYCODE, ds:data
	
start:
	; Загрузка сегментного регистра данных DS
	mov ax, data
	mov ds, ax
	
main:
	; Очистка экрана
	call clrscr;
	
	; Предложение ввести символа
	mov dl, offset startStr
	call putst
	call clrf
	
	; Очищаем счетчик и регистр куда будем заносить символы
	mov cx, 0 
	mov bx, 0
		
	char_hand:
		; Ожидание ввода символа
		call getch_no_echo
		cmp al, '*'
		je exit
		
		; Проверка на правильность введенных данных и перевод в машинный код
		call hex_to_mach
	
	cmp cx, 4
	jne char_hand
	
	; Сохраняем число
	push bx
	
	; Равно
	mov dl, ' '
	call putch
	mov dl, '='
	call putch
	mov dl, ' '
	call putch
	
	; Сохраняем число
	mov dx, bx
	push dx
	
	; Вывод на экран первых 2 символов
	mov al, dh
	call hex
	
	; Вывод на экран вторых 2 символов
	pop dx
	mov al, dl
	call hex
	
	; Вывод h
	mov dx, 'h'
	call putch
	
	; Тире
	mov dl, ' '
	call putch
	mov dl, '-'
	call putch
	mov dl, ' '
	call putch
	
	; Вывод десятичного на экран
	pop bx
	call mach_to_dec
	call clrf
	
	; Ожидание ввода символа 
	call getch_no_echo

jmp main

exit:
	; Очистка экрана
	call clrscr;
	
	; Вывод информации о себе
	mov dl, offset infStr
	call putst
	call clrf
	
	; Ожидание ввода символа 
	call getch_no_echo
	
	; Очистка экрана
	call clrscr;
	
	; Выход из программы
	mov al, 0
	mov ah, 4ch
	int 021h
	

; Процедура - вывод строки на экрана
putst proc
	mov ah, 09h
	int 021h
	ret
putst endp
	
; Процедура - вывод символа
putch proc
	mov ah, 02h
	int 021h
	ret
putch endp


; Процедура - перевод строки
clrf proc
	mov dl, 10
	call putch
	mov dl, 13
	call putch
	ret
clrf endp 


; Процедура - ввод символа с эхо
getch_echo proc   
	mov ah, 01h
	int 021h
    ret
getch_echo endp
	
	
; Процедура - ввод символа без эхо
getch_no_echo proc   
	mov ah, 08h
	int 021h
    ret
getch_no_echo endp


; Процедура - очистка экрана
clrscr proc   
	mov ah, 00h 
	mov al, 02
	int 10h
	ret
clrscr endp


; Процедура - перевод в 16
hex proc
	mov bx, offset hexStr
	
	; Получение десятков
	push ax
	shr al, 4
	xlat 
	
	; Вывод десятков
	mov dl, al
	call putch
	
	; Получение единиц
	pop ax
	and al, 00001111b
	xlat 
	
	; Вывод единиц
	mov dl, al
	call putch
	
	ret
hex endp


; Процедура - по переводу в машинный код
hex_to_mach proc
	mov dl, al
	
	; Проверка на ввод цифры
	check_num:
		; Проверка на цифру
		cmp al,'0' 
		jb check_big_let    
		cmp al,'9'
		ja check_big_let   
		
		; Получение цифры
		sub al,'0' 
		push ax
	jmp correct
	
	; Проверка на ввод большой буквы
	check_big_let: 
		; Проверка на большую букву
		cmp al,'A' 
		jb check_lit_let
		cmp al,'F'
		ja check_lit_let
		
		; Получение буквы
		sub al,'A' 
		add al, 10  
		push ax
	jmp correct
	
	; Проверка на ввод маленькой буквы
	check_lit_let:
		; Проверка на маленькую букву
		cmp al,'a' 
		jb finish
		cmp al,'f'
		ja finish
		
		; Получение буквы
		sub al,'a' 
		add al, 10 
		push ax
	jmp correct	
	
	; Если введенный символ удовлетворяет условиям
	correct: 
		; Вывод на экран
		call putch 
		
		; Добавление в bx нашего символа
		pop ax 
		mov ah, 0    
		shl bx, 4
		add bx, ax	
	; Увеличение счетчика
	inc cx 
	
	; Выход из функции
	finish: 
	ret
hex_to_mach endp

; Процедура - по переводу в десятичный код
mach_to_dec proc 
	; ax - делимое
	mov ax, bx        	
	mov si, 0
	
	cycle:
		; dx - остаток
		mov dx, 0	
		; bx - делитель
		mov bx, mas[si]	;делитель 
	
		; Делим ax на bx, при этом ax - частное, dx - остаток
		div bx	
		; Сохраняем остаток
		push dx

		; Вывод символа на экран
		add ax,'0'		
		mov dl,al
		call putch

		; Получаем новое делимое
		pop ax
		inc si
		inc si
	
		cmp si, 10
	jb cycle	
ret
mach_to_dec	endp

; Конец сегмента
MYCODE ends


data segment
	startStr db, 'Введите число (HHHH) :$'
	hexStr db '0123456789ABCDEF'
	mas dw 10000, 1000, 100, 10, 1
	infStr db, 'Алехин Сергей Лаб 7$'
data ends


end start
	