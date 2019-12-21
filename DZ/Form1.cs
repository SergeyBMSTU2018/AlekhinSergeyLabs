using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Text;
using System.Windows.Forms;
using LevenDistance;

namespace Lab5
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
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
                    if (LDistance.Distance(str, findWordInList.Text) <= int.Parse(maxSize.Text))
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
