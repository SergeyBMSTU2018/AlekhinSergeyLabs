namespace SQL_BD
{
    partial class Form_Seller_Bill
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            Microsoft.Reporting.WinForms.ReportDataSource reportDataSource1 = new Microsoft.Reporting.WinForms.ReportDataSource();
            this.Seller_BillBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.BD_Shop_4semDataSet = new SQL_BD.BD_Shop_4semDataSet();
            this.Seller_CheckBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.Seller_BillTableAdapter = new SQL_BD.BD_Shop_4semDataSetTableAdapters.Seller_BillTableAdapter();
            this.Seller_CheckTableAdapter = new SQL_BD.BD_Shop_4semDataSetTableAdapters.Seller_CheckTableAdapter();
            this.reportViewer1 = new Microsoft.Reporting.WinForms.ReportViewer();
            ((System.ComponentModel.ISupportInitialize)(this.Seller_BillBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.BD_Shop_4semDataSet)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.Seller_CheckBindingSource)).BeginInit();
            this.SuspendLayout();
            // 
            // Seller_BillBindingSource
            // 
            this.Seller_BillBindingSource.DataMember = "Seller_Bill";
            this.Seller_BillBindingSource.DataSource = this.BD_Shop_4semDataSet;
            // 
            // BD_Shop_4semDataSet
            // 
            this.BD_Shop_4semDataSet.DataSetName = "BD_Shop_4semDataSet";
            this.BD_Shop_4semDataSet.SchemaSerializationMode = System.Data.SchemaSerializationMode.IncludeSchema;
            // 
            // Seller_CheckBindingSource
            // 
            this.Seller_CheckBindingSource.DataMember = "Seller_Check";
            this.Seller_CheckBindingSource.DataSource = this.BD_Shop_4semDataSet;
            // 
            // Seller_BillTableAdapter
            // 
            this.Seller_BillTableAdapter.ClearBeforeFill = true;
            // 
            // Seller_CheckTableAdapter
            // 
            this.Seller_CheckTableAdapter.ClearBeforeFill = true;
            // 
            // reportViewer1
            // 
            this.reportViewer1.Dock = System.Windows.Forms.DockStyle.Fill;
            reportDataSource1.Name = "DataSet1";
            reportDataSource1.Value = this.Seller_BillBindingSource;
            this.reportViewer1.LocalReport.DataSources.Add(reportDataSource1);
            this.reportViewer1.LocalReport.ReportEmbeddedResource = "SQL_BD.Seller_Bill.rdlc";
            this.reportViewer1.Location = new System.Drawing.Point(0, 0);
            this.reportViewer1.Name = "reportViewer1";
            this.reportViewer1.ServerReport.BearerToken = null;
            this.reportViewer1.Size = new System.Drawing.Size(975, 186);
            this.reportViewer1.TabIndex = 0;
            // 
            // Form_Seller_Bill
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(975, 186);
            this.Controls.Add(this.reportViewer1);
            this.Margin = new System.Windows.Forms.Padding(2);
            this.Name = "Form_Seller_Bill";
            this.Text = "Чек";
            this.Load += new System.EventHandler(this.Form_Seller_Bill_Load);
            ((System.ComponentModel.ISupportInitialize)(this.Seller_BillBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.BD_Shop_4semDataSet)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.Seller_CheckBindingSource)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion
        private System.Windows.Forms.BindingSource Seller_BillBindingSource;
        private BD_Shop_4semDataSet BD_Shop_4semDataSet;
        private BD_Shop_4semDataSetTableAdapters.Seller_BillTableAdapter Seller_BillTableAdapter;
        private System.Windows.Forms.BindingSource Seller_CheckBindingSource;
        private BD_Shop_4semDataSetTableAdapters.Seller_CheckTableAdapter Seller_CheckTableAdapter;
        private Microsoft.Reporting.WinForms.ReportViewer reportViewer1;
    }
}