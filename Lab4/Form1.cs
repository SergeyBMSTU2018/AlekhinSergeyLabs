using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Text;
using System.Windows.Forms;

namespace Lab4
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
            var findTime = new Stopwatch();
            findTime.Start();

            if (List.Contains(findWordInList.Text))
            {
                listBox1.BeginUpdate();
                listBox1.Items.Add(findWordInList.Text);
                listBox1.EndUpdate();
            }

            findTime.Stop();
            findTimeLabel.Text = findTime.Elapsed.TotalMilliseconds.ToString();
        }
    }
}
