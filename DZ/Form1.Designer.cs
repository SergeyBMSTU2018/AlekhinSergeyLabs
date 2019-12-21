namespace Lab5
{
    partial class Form1
    {
        /// <summary>
        /// Обязательная переменная конструктора.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Освободить все используемые ресурсы.
        /// </summary>
        /// <param name="disposing">истинно, если управляемый ресурс должен быть удален; иначе ложно.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Код, автоматически созданный конструктором форм Windows

        /// <summary>
        /// Требуемый метод для поддержки конструктора — не изменяйте 
        /// содержимое этого метода с помощью редактора кода.
        /// </summary>
        private void InitializeComponent()
        {
            this.readFromFile = new System.Windows.Forms.Button();
            this.label1 = new System.Windows.Forms.Label();
            this.downloadTimeLabel = new System.Windows.Forms.Label();
            this.findWordInList = new System.Windows.Forms.TextBox();
            this.findInList = new System.Windows.Forms.Button();
            this.maxSize = new System.Windows.Forms.TextBox();
            this.listBox1 = new System.Windows.Forms.ListBox();
            this.label2 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.findTimeLabel = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // readFromFile
            // 
            this.readFromFile.Location = new System.Drawing.Point(12, 28);
            this.readFromFile.Name = "readFromFile";
            this.readFromFile.Size = new System.Drawing.Size(776, 50);
            this.readFromFile.TabIndex = 0;
            this.readFromFile.Text = "Чтение файла";
            this.readFromFile.UseVisualStyleBackColor = true;
            this.readFromFile.Click += new System.EventHandler(this.ReadFromFile_Click);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(493, 138);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(170, 25);
            this.label1.TabIndex = 1;
            this.label1.Text = "Время загрузки";
            // 
            // downloadTimeLabel
            // 
            this.downloadTimeLabel.AutoSize = true;
            this.downloadTimeLabel.Location = new System.Drawing.Point(692, 138);
            this.downloadTimeLabel.Name = "downloadTimeLabel";
            this.downloadTimeLabel.Size = new System.Drawing.Size(66, 25);
            this.downloadTimeLabel.TabIndex = 2;
            this.downloadTimeLabel.Text = "00:00";
            // 
            // findWordInList
            // 
            this.findWordInList.Location = new System.Drawing.Point(12, 91);
            this.findWordInList.Name = "findWordInList";
            this.findWordInList.Size = new System.Drawing.Size(651, 31);
            this.findWordInList.TabIndex = 3;
            // 
            // findInList
            // 
            this.findInList.Location = new System.Drawing.Point(669, 84);
            this.findInList.Name = "findInList";
            this.findInList.Size = new System.Drawing.Size(119, 45);
            this.findInList.TabIndex = 4;
            this.findInList.Text = "Найти";
            this.findInList.UseVisualStyleBackColor = true;
            this.findInList.Click += new System.EventHandler(this.FindInList_Click);
            // 
            // maxSize
            // 
            this.maxSize.Location = new System.Drawing.Point(325, 132);
            this.maxSize.Name = "maxSize";
            this.maxSize.Size = new System.Drawing.Size(162, 31);
            this.maxSize.TabIndex = 5;
            // 
            // listBox1
            // 
            this.listBox1.FormattingEnabled = true;
            this.listBox1.ItemHeight = 25;
            this.listBox1.Location = new System.Drawing.Point(17, 184);
            this.listBox1.Name = "listBox1";
            this.listBox1.Size = new System.Drawing.Size(470, 254);
            this.listBox1.TabIndex = 6;
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(12, 132);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(289, 25);
            this.label2.TabIndex = 7;
            this.label2.Text = "Максимальное расстояние:";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(493, 170);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(152, 25);
            this.label3.TabIndex = 8;
            this.label3.Text = "Время поиска";
            // 
            // findTimeLabel
            // 
            this.findTimeLabel.AutoSize = true;
            this.findTimeLabel.Location = new System.Drawing.Point(692, 170);
            this.findTimeLabel.Name = "findTimeLabel";
            this.findTimeLabel.Size = new System.Drawing.Size(66, 25);
            this.findTimeLabel.TabIndex = 9;
            this.findTimeLabel.Text = "00:00";
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(12F, 25F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.findTimeLabel);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.listBox1);
            this.Controls.Add(this.maxSize);
            this.Controls.Add(this.findInList);
            this.Controls.Add(this.findWordInList);
            this.Controls.Add(this.downloadTimeLabel);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.readFromFile);
            this.Name = "Form1";
            this.Text = "Алехин Сергей ИУ5-31Б";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button readFromFile;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label downloadTimeLabel;
        private System.Windows.Forms.TextBox findWordInList;
        private System.Windows.Forms.Button findInList;
        private System.Windows.Forms.TextBox maxSize;
        private System.Windows.Forms.ListBox listBox1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Label findTimeLabel;
    }
}

