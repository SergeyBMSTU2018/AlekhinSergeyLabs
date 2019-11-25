using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Text;
using System.Windows.Forms;

namespace Lab5
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        /// <summary>
        /// /// Вычисление расстояния Дамерау-Левенштейна
        /// /// </summary> 
        public static int Distance(string str1Param, string str2Param) 
        {     
            if ((str1Param == null) || (str2Param == null)) return -1; 
            
            int str1Len = str1Param.Length;
            int str2Len = str2Param.Length; 
            
            //Если хотя бы одна строка пустая,  
            //возвращается длина другой строки   
            if ((str1Len == 0) && (str2Len == 0)) return 0;  
            if (str1Len == 0) return str2Len;  
            if (str2Len == 0) return str1Len; 
            
            //Приведение строк к верхнему регистру 
            string str1 = str1Param.ToUpper(); 
            string str2 = str2Param.ToUpper(); 
            
            //Объявление матрицы     
            int[,] matrix = new int[str1Len + 1, str2Len + 1]; 
            
            //Инициализация нулевой строки и нулевого столбца матрицы    
            for (int i = 0; i <= str1Len; i++) matrix[i, 0] = i; 
            for (int j = 0; j <= str2Len; j++) matrix[0, j] = j; 
            //Вычисление расстояния Дамерау-Левенштейна    
            for (int i = 1; i <= str1Len; i++)     
            {         
                for (int j = 1; j <= str2Len; j++)    
                {            
                    //Эквивалентность символов, переменная symbEqual      
                    //соответствует m(s1[i],s2[j])            
                    int symbEqual = (                 
                        (str1.Substring(i - 1, 1) ==     
                        str2.Substring(j - 1, 1)) ? 0 : 1); 
                    
                    int ins = matrix[i, j - 1] + 1; //Добавление   
                    int del = matrix[i - 1, j] + 1; //Удаление      
                    int subst = matrix[i - 1, j - 1] + symbEqual; //Замена 
                    
                    //Элемент матрицы вычисляется            
                    //как минимальный из трех случаев           
                    matrix[i, j] = Math.Min(Math.Min(ins, del), subst); 
                    
                    //Дополнение Дамерау по перестановке соседних символов  
                    if ((i > 1) && (j > 1) &&           
                        (str1.Substring(i - 1, 1) == str2.Substring(j - 2, 1)) &&   
                        (str1.Substring(i - 2, 1) == str2.Substring(j - 1, 1)))         
                    {                 matrix[i, j] = Math.Min(matrix[i, j],
                                                     matrix[i - 2, j - 2] + symbEqual);     
                    }        
                }    
            }    
            //Возвращается нижний правый элемент матрицы   
            return matrix[str1Len, str2Len]; 
        }

        public List<string> List = new List<string>();
        private void ReadFromFile_Click(object sender, EventArgs e)
        {
            var currentFileDialog = new OpenFileDialog
            {
                InitialDirectory = Directory.GetCurrentDirectory(),
                Filter = "Текстовые файлы (*.txt)|*.txt"
            };

            currentFileDialog.ShowDialog();
            if (currentFileDialog.FileName == "")
            {
                return;
            }

            var downloadTime = new Stopwatch();
            downloadTime.Start();

            string text = File.ReadAllText(currentFileDialog.FileName, Encoding.GetEncoding(1251));
            foreach (var currentWord in text.Split())
            {
                if (!List.Contains(currentWord))
                {
                    List.Add(currentWord);
                }
            }

            downloadTime.Stop();
            downloadTimeLabel.Text = downloadTime.Elapsed.TotalMilliseconds.ToString();
        }

        private void FindInList_Click(object sender, EventArgs e)
        {
            List<string> currentList = new List<string>();

            int maxSizeNumber;
            if ((int.TryParse(maxSize.Text, out maxSizeNumber)) && (!string.IsNullOrWhiteSpace(findWordInList.Text)))
            {
                var findTime = new Stopwatch();
                findTime.Start();

                foreach (string str in List)
                {
                    if (Distance(str, findWordInList.Text) <= int.Parse(maxSize.Text))
                    {
                        currentList.Add(str);
                    }
                }

                listBox1.BeginUpdate();
                listBox1.Items.Clear();
                foreach (string str in currentList)
                {
                    listBox1.Items.Add(str);
                }
                listBox1.EndUpdate();

                findTime.Stop();
                findTimeLabel.Text = findTime.Elapsed.TotalMilliseconds.ToString();
            }
            else
            {
                MessageBox.Show("Введите слово или максимально расстояние");
            }
        }
    }
}
